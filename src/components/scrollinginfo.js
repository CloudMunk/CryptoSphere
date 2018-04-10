import React from 'react';
import { Media } from 'reactstrap';

const ScrollingInfo = () => {
    return (
      <div>
        <Media>
          <Media right top href="#">
           <image src="https://i.imgur.com/31IYAEo.jpg">
           </image>
            <Media/>
          </Media>
          <Media body>
            <Media heading>
              Top aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </div>
    );
  };
  
  export default ScrollingInfo;