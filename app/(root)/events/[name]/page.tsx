import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

const Events = ({params} : any ) => {
  return (
  <div className="">
      {/*<section className="bg-[url('/bg.png')] bg-cover bg-no-repeat flex w-screen h-20 max-md:pb-14"></section>*/}
      <div className='body'>
      <div className='waviy'>
      <span style={{ '--i' : 1 } as React.CSSProperties} className="c">C</span>
      <span style={{ '--i' : 2 } as React.CSSProperties} className="c">o</span>
      <span style={{ '--i' : 3 } as React.CSSProperties} className="o">m</span>
      <span style={{ '--i' : 4 } as React.CSSProperties} className="o">i</span>
      <span style={{ '--i' : 5 } as React.CSSProperties} className="m">n</span>
      <span style={{ '--i' : 6 } as React.CSSProperties} className="m">g</span>
      <span className='m-4'></span>
      <span style={{ '--i' : 7 } as React.CSSProperties} className="i">S</span>
      <span style={{ '--i' : 8 } as React.CSSProperties} className="i">o</span>
      <span style={{ '--i' : 9 } as React.CSSProperties} className="n">o</span>
      <span style={{ '--i' : 10 } as React.CSSProperties} className="n">n</span>
      <span style={{ '--i' : 11 } as React.CSSProperties} className="g">.</span>
      <span style={{ '--i' : 12 } as React.CSSProperties} className="g">.</span>
      <span style={{ '--i' : 13 } as React.CSSProperties} className="g">.</span>
    </div>
    </div>
  </div>
  )
}
{/* <div>Event {params.name}</div> */}

export default Events