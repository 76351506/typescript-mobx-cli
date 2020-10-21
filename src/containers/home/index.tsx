import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

interface IHomeProps {
  home: any;
  app: any;
}
interface ICarousel {
  id: number;
  cid: string;
  c_img_url: string;
  c_img_title: string;
  c_img_des?: string;
  c_type: number;
}
@inject('home')
@inject('app')
@observer
class Home extends Component<IHomeProps> {
  componentDidMount() {
    this.props.home._getCarouselList();
  }
  render() {
    const { carouselList } = this.props.home;
    const { count } = this.props.app;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => this.props.app.add()}>add</button>
        {carouselList.map((carousel: ICarousel) => {
          return (
            <li key={carousel.cid}>
              <img
                src={`http://localhost:7001/public/coursel/${carousel.c_img_url}`}
                alt=''
              />
            </li>
          );
        })}
      </div>
    );
  }
}
export default Home;
