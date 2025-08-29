import {useState} from 'react'
import {FiChevronLeft, FiChevronRight, FiPlusCircle, FiMinusCircle} from "react-icons/fi";
import './App.css'
import Matrix from './Matrix'

function App() {
  const [page, setPage] = useState(1)
  const [leftPage, setLeftPage] = useState(page)
  const [rightPage, setRightPage] = useState(page + 1)
  const [polygonArray, setPolygonArray] = useState([])

  /**
   * config
   */
  const pages = [null, '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg']
  const nPolygons = 8
  const flipDuration = 1000 //ms
  const pageWidth = 640
  const pageHeight = 960
  let flipProgress = 0
  const forwardDirection = 'right'
  let flipDirection = 'right'
  let frontImage = null
  let backImage = null
  let reqId

  function pageUrl(page) {
    return pages[page] || null;
  }

  function flipStart(direction) {
    let goForward = direction === forwardDirection
    if (goForward) {
      if (page >= pages.length - 2) return
    } else {
      if (page === 1) return
    }
    if (goForward) {
      frontImage = pageUrl(page + 1)
      backImage = pageUrl(page + 2)
    } else {
      frontImage = pageUrl(page)
      backImage = pageUrl(page - 1)
    }
    flipDirection = direction
    flipProgress = 0

    const t0 = Date.now();
    const duration = flipDuration * (1 - flipProgress);
    const startRatio = flipProgress;
    let firstFrameRender = false;
    if (reqId) cancelAnimationFrame(reqId);

    const animate = () => {
      reqId = requestAnimationFrame(() => {
        let t = Date.now() - t0;
        let ratio = startRatio + t / duration;
        if (ratio > 1) {
          ratio = 1;
        }
        flipProgress = ratio
        if (ratio < 1) {
          setPolygonArray(makePolygonArray('front').concat(makePolygonArray('back')));
          if (!firstFrameRender) {
            firstFrameRender = true
            if (goForward) {
              setRightPage(page + 3);
            } else {
              setLeftPage(page - 2);
            }
          }
          return animate();
        } else {
          setPolygonArray([])
          const currentPage = page
          if (goForward) {
            setLeftPage(currentPage + 2);
            setPage(currentPage + 2)
          } else {
            setRightPage(currentPage - 1);
            setPage(currentPage - 2)
          }

          if (reqId) {
            cancelAnimationFrame(reqId);
            reqId = null
          }
        }
      });
    }
    animate();
  }


  function makePolygonArray(face) {
    let progress = flipProgress
    let direction = flipDirection
    let image = face === 'front' ? frontImage : backImage
    let polygonWidth = pageWidth / nPolygons
    let originRight = false
    let pageX = 0;
    if (direction === 'left') {
      if (face === 'back') {
        pageX = pageWidth;
      } else {
        originRight = true;
      }
    } else {
      if (face === 'front') {
        pageX = pageWidth;
      } else {
        originRight = true;
      }
    }
    const pageMatrix = new Matrix();
    pageMatrix.translate(pageWidth);
    pageMatrix.perspective(2400);
    pageMatrix.translate(-pageWidth);
    pageMatrix.translate(pageX, 0);

    let pageRotation = 0
    if (progress > 0.5) {
      pageRotation = -(progress - 0.5) * 2 * 180;
    }
    if (direction === 'left') {
      pageRotation = -pageRotation;
    }
    if (face === 'back') {
      pageRotation += 180;
    }
    if (pageRotation) {
      if (originRight) {
        pageMatrix.translate(pageWidth);
      }
      pageMatrix.rotateY(pageRotation);
      if (originRight) {
        pageMatrix.translate(-pageWidth);
      }
    }
    let theta;
    if (progress < 0.5) {
      theta = progress * 2 * Math.PI;
    } else {
      theta = (1 - (progress - 0.5) * 2) * Math.PI;
    }
    if (theta === 0) {
      theta = 1e-9;
    }
    let radius = pageWidth / theta;
    let radian = 0;
    let dRadian = theta / nPolygons;
    let rotate = dRadian / 2 / Math.PI * 180;
    let dRotate = dRadian / Math.PI * 180;
    if (originRight) {
      rotate = -theta / Math.PI * 180 + dRotate / 2;
    }
    if (face === 'back') {
      rotate = -rotate;
      dRotate = -dRotate;
    }
    let minX = 2e308;
    let maxX = -2e308;
    const results = [];
    for (let i = 0, ref = nPolygons; i < ref; i++) {
      let bgPos = `${i / (nPolygons - 1) * 100}% 0px`;
      let m = pageMatrix.clone();
      let rad = originRight ? theta - radian : radian;
      let x = Math.sin(rad) * radius;
      if (originRight) {
        x = pageWidth - x;
      }
      let z = (1 - Math.cos(rad)) * radius;
      if (face === 'back') {
        z = -z;
      }
      m.translate3d(x, 0, z);
      m.rotateY(-rotate);
      let x0 = m.transformX(0);
      let x1 = m.transformX(polygonWidth);
      maxX = Math.max(Math.max(x0, x1), maxX);
      minX = Math.min(Math.min(x0, x1), minX);
      radian += dRadian;
      rotate += dRotate;
      results.push([face + i, image, bgPos, m.toString(), Math.abs(Math.round(z))]);
    }
    return results
  }


  function genPolygonWidth() {
    let w = pageWidth / nPolygons;
    w = Math.ceil(w + 1);
    return w + 'px';
  }

  return (<div id="app">
    <div className="action-bar">
      <FiChevronLeft className="btn left" onClick={() => {
        flipStart('left')
      }}/>
      <FiPlusCircle className="btn plus"/>
      <span className="page-num">
        Page {page} of {pages.length - 1}
      </span>
      <FiMinusCircle className="btn minus"/>
      <FiChevronRight className="btn right" onClick={() => {
        flipStart('right')
      }}/>
    </div>
    <div className="flip-book">
      <div className="viewport">
        <div className="flip-book-container">
          <div className="click-to-flip left"></div>
          <div className="click-to-flip right"></div>
          <div>
            <img src={pageUrl(leftPage)} alt="" className="page left fixed" style={{
              zIndex: 0
            }}/>
            <img src={pageUrl(rightPage)} alt="" className="page right fixed" style={{
              zIndex: 0
            }}/>
          </div>
          {polygonArray.map(([key, bgImage, bgPos, transform, z,]) => <div
              className={`polygon ${key} ${bgImage ? '' : 'blank'}`}
              key={key}
              style={{
                backgroundImage: bgImage && `url(${bgImage})`,
                backgroundSize: `${pageWidth}px ${pageHeight}px`,
                backgroundPosition: bgPos,
                width: genPolygonWidth(),
                height: `${pageHeight}px`,
                transform: transform,
                zIndex: z
              }}>

          </div>)}
        </div>
      </div>
    </div>
  </div>)
}

export default App
