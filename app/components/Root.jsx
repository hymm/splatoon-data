import React from 'react';
import Blaster from './BlasterSvg';
import FiringRange from './FiringRangeSvg';
import DamageScaleSvg from './DamageScaleSvg';
import WeaponChart from './WeaponChart';
import rawData from './splatoon-main-weapons-raw-data.json';
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap-loader';
//import 'react-bootstrap-table/css/react-bootstrap-table.css'

var blasterNames = ['Luna Blaster', 'Blaster', 'Range Blaster', 'Rapid Blaster', 'Rapid Blaster Pro'];

export default class Root extends React.Component {
  getBlaster(name) {
    return rawData.find(function(weapon) {
      return weapon.en_name === name;
    });
  }

  getBlastersJsx() {
    var blasters = rawData.filter(function(weapon) {
      return weapon.class === 'blaster';
    });

    blasters.sort(function(a, b) {
      return b.mCollisionRadiusFar - a.mCollisionRadiusFar;
    });

    return blasters.map(function(data, index) {
      return <Blaster key={data.en_name} data={data} ox={60+index*90} oy={220} />;
    }.bind(this));
  }

  // sub is 3 points, main is 10 points
  defenseUp(weaponDamage, defPoints) {
    return weaponDamage*(1-(0.99*defPoints-(0.09*defPoints)^2)/100/1.8)
  }

  render() {
    var width = 500;
    var svgWidth = width + 70;
    var height = 240;

    return (
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <svg svg width='100%' height='100%'
                viewBox={"0 0 " + svgWidth + " " + height }
                xmlns="http://www.w3.org/2000/svg">
              <FiringRange width={width} height={200} oy={220} />
              {this.getBlastersJsx()}
              <DamageScaleSvg x={500} y={20} height={200} />
            </svg>
            <WeaponChart data={rawData.filter(weapon => weapon.class === 'blaster')} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
