import Title from './Title'
import { serviceData } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {serviceData.map((data) => {
          return (
            <article className="service">
              <span className="service-icon">
                <i className={data.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{data.title}</h4>
                <p className="service-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
