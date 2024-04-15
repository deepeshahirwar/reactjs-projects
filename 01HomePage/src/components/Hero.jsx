import React from "react";

const Hero = () => {
    
    return (
        <>
            <div className="
            flex justify-center item-center mt-16 space-x-32
          ">
                <div className=" w-[30rem] mt-20  

          ">
                    <h1 className="text-5xl  ">YOUR FAVERATE SHOES HERE FOR YOUR SHOOPING</h1>
                    <p className="mt-4 text-xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Temporibus iste maxime iusto numquam aliquam iure at adi numquam aliquam.</p>

                    <div className="buttons mt-10 flex justify-left
                item-center space-x-10 ">
                        <button className="border px-4 py-2 bg-red-700" >

                            Shop Now</button>
                        <button className="border px-4 py-2 ">Category</button>
                    </div>
                </div>

                <div>
                    <img src="https://m.media-amazon.com/images/I/61aEHFfSmxL.jpg" alt=""
                        className=" w-[30rem]"
                    />
                </div>

            </div>

        </>
    )
}

export default Hero