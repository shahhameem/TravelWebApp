export const Card = ({ children, bg = '$gray-900' }) => {
  return (
    <div className={` col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0`}>
        <div className={`${bg} icon-box`} data-aos="fade-up">
        { children }
        </div>
    </div>
  )
}
