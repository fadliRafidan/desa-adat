import DesaSingle from './DesaSingle';

const DesaList = () => {
  
   return (
      <>
         <section className="event__area pb-115 pt-50">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper-2 text-center mb-60">
                        <span className="section__title-pre-2">Featured Courses</span>
                        <h3 className="section__title-2">Join our upcoming event</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                    <DesaSingle/>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default DesaList;