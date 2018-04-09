import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Grid, Cell } from 'react-mdl';

const MediaStories = () => {
  return (
    <div>
          <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>New Ico here</CardTitle>
              <CardText>
                  The hottest new ico in town. Everybody's buying it.. 
                  Lorem ipsum deljd wgjwng rgwergwkjnw sggsd
              </CardText>
              <CardActions border>
                  <Button colored>Read more</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>




      <Media>
        <Media left top href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Top aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left middle href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Middle aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Bottom aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

    </div>
  );
};

export default MediaStories;
