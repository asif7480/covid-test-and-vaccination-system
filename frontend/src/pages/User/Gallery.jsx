import Topbar from '@/components/User/Topbar'
import React from 'react'


const gallerrData = [
  {
    image: "https://content.presspage.com/uploads/2110/1920_potsvaccination.jpeg?10000",
  },
  {
    image: "https://news.uams.edu/wp-content/uploads/2021/10/iStock-1230251561-scaled.jpg",
  },
  {
    image: "https://news.harvard.edu/wp-content/uploads/2021/02/iStock-12168123691.jpg",
  },
  {
    image: "https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/Vaccines%20banner.jpg?itok=47SBp3Ji",
  },
  {
    image: "https://chinaobservers.eu/wp-content/uploads/2022/09/covid-still-life-with-vaccine-2-e1664458442814.jpg",
  },
  {
    image: "https://live-production.wcms.abc-cdn.net.au/0e66e1e1ba2d82230fd69ba2a7e9f381?impolicy=wcms_crop_resize&cropH=3228&cropW=3228&xPos=886&yPos=0&width=862&height=862",
  },
  {
    image: "https://www.dominican.edu/sites/default/files/2023-06/HP%20image%20of%20Vaccine%20Shot.jpg",
  },
  {
    image: "https://d3i6fh83elv35t.cloudfront.net/static/2020/11/2020-11-13T103633Z_406573359_RC2A2K9YBNOV_RTRMADP_3_HEALTH-CORONAVIRUS-VACCINES-COVAX-768x516.jpg",
  },
    {
    image: "https://static.independent.co.uk/2020/11/18/12/GettyImages-1229653940.jpg?width=1200",
  },
    {
    image: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/12/20/2392386-1555624351.jpg?itok=v8MRfy8s",
  },
    {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQPTmZ8Bc8hqAxuuJGxIfptN03yW5Mob4PYTzR2VbvE_4KAXGNFHu0nc6MzuE7NTIunM&usqp=CAU",
  },  {
    image: "https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2021/04/01/jj_johnson_jophnson_j_j_vaccine.jpg",
  },

]


function Gallery() {
  return (
    <>
      <Topbar
        title={`Gallery`}
        img={`https://wvumedicine.org/braxton/wp-content/uploads/sites/40/2019/01/AdobeStock_188491894-425773_1080x675.jpeg`}
      />

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {
                gallerrData.map((data, i) => (
                  <div className="lg:w-1/3 sm:w-1/2 p-4" key={i}>
                    <div className="flex relative">
                      <img alt="gallery" className="rounded-2xl absolute inset-0 w-full h-full object-cover object-center" src={data.image} />
                      <div className=" rounded-2xl px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Gallery