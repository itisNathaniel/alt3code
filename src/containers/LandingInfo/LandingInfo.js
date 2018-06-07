import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import './LandingInfo.css';
import LandingInfoCard from 'LandingInfoCard/LandingInfoCard';
import LandingInfoLink from 'LandingInfoLink/LandingInfoLink';
import { Code, Bookmark, Widgets, LaptopMac } from '@material-ui/icons';
import TempProjImage from '../../images/hip-square.png';
import AltChart from 'AltChart/AltChart';
import SigmoidGif from '../../images/sigmoid.gif';
import { ParallaxProvider, Parallax } from 'react-skrollr'

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: '800',
    width:'95%',
    borderRadius: '10px',  
    background:'white',
    margin: '0 auto',
    marginTop: '425px',
    marginBottom: '75px',
    padding: '25px',
    position:'relative',
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 10px 20px 5px rgba(0,0,0,0.23)",
    fontFamily: "Nunito"
  },
});

class LandingInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
          <Grid
            container
            spacing={16}
            className={classes.root}
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            {/* Who we are */}
            <Grid key="WhoWeAreIntro" item xs={12} style={{textAlign:"center"}}>
                <p className="whoWeAreText">Mollit elit excepteur in consectetur sunt ad et anim fugiat occaecat qui dolor dolore sed consequat cillum aute sunt nostrud ullamco eiusmod in non irure nisi.</p>
            </Grid>
            <hr className="customBreak" />

            {/* What we do div grid */}
            <Grid key="Projects" item xs={12}>      
                <Parallax
                  data={{
                    'data-center-center': 'opacity: 1;',
                    'data-bottom-top': 'opacity: 0;'
                  }}
                >
                  <p className="landingInfoTitle">What we do</p>
                </Parallax>
            </Grid>
            
            <Grid
              container
              spacing={16}
              direction="row"
              justify="space-around"
              alignItems="center"
              style={{margin: '40px'}}
            >
              <Grid key="Projects" className="offerDiv" item xs={12} md={7}>
                <LandingInfoCard title="Projects" icon={<LaptopMac style={{color:'green', fontSize: '52px'}}/>} description="Eu pariatur do cillum duis incididunt deserunt mollit dolore labore."/>
              </Grid>
              <Grid item xs={12} md={5} />
            </Grid>
            <Grid
              container
              spacing={16}
              direction="row"
              justify="space-around"
              alignItems="center"
              style={{margin: '40px'}}
            >
              <Grid item xs={12} md={5} />
              <Grid key="Guides" className="offerDiv" item xs={12} md={7}>
                <LandingInfoCard title="Guides" icon={<Bookmark style={{color:'blue', fontSize: '52px'}}/>} description="Qui magna dolore sit laboris eu esse ut deserunt occaecat."/>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={16}
              direction="row"
              justify="space-around"
              alignItems="center"
              style={{margin: '40px'}}
            >
              <Grid key="SnippetsIntro" className="offerDiv" item xs={12} md={7}>
                <LandingInfoCard title="Snippets" icon={<LaptopMac style={{color:'green', fontSize: '52px'}}/>} description="Eu pariatur do cillum duis incididunt deserunt mollit dolore labore."/>
              </Grid>
              <Grid item xs={12} md={5} />
            </Grid>
            <Grid
              container
              spacing={16}
              direction="row"
              justify="space-around"
              alignItems="center"
              style={{margin: '40px'}}
            >
              <Grid item xs={12} md={5} />
              <Grid key="Widgets" className="offerDiv" item xs={12} md={7}>
                <LandingInfoCard title="Widgets" icon={<Widgets style={{color:'red', fontSize: '52px'}}/>} description="Quis incididunt voluptate officia incididunt enim labore dolor minim esse ullamco aliqua."/>
              </Grid>
            </Grid>

            {/* Latest Project div */}
            <Grid key="LatestProj" item xs={12}>
                <h1 className="landingInfoProjTitle">Our Latest Project</h1>
            </Grid>
            <Grid key="ProjImage" item xs={12} lg={6} style={{textAlign:"center"}}>
                <img src={TempProjImage} className="latestProjImage" alt="Latest Project"/>
            </Grid>
            <Grid key="ProjDescription" item xs={12} lg={6}>
                <h1>Project Title</h1>
                <p>Project sub-title</p>
                <p>Lorem ipsum deserunt incididunt reprehenderit cupidatat anim proident elit ut mollit sunt in aliquip ut commodo commodo aliquip eiusmod commodo eu dolor ut tempor do aliqua non consectetur. Sunt irure cillum laborum aliqua sint anim labore cupidatat commodo do ex aliquip duis ut laborum ut commodo minim ex culpa eu in sed dolor exercitation ullamco laboris adipisicing. Lorem ipsum in sint anim proident eu adipisicing sed et ut sed tempor adipisicing mollit in consequat culpa ut do dolor reprehenderit dolor veniam dolor culpa veniam.</p>
                <LandingInfoLink text="View on GitHub" textColor="white" bgColor="rgb(63,81,181)" link="https://www.google.com" />
            </Grid>
        </Grid>
        <Grid
            container
            spacing={16}
            className={classes.root}
            style={{marginTop: '25px', backgroundColor: 'rgb(60,60,60)', color: 'white'}}
            direction="row"
            justify="space-around"
            alignItems="center"
          >
          <Grid key="Chart" item xs={12} lg={3}>
            {/*<AltChart equationOverlay={<MathEquation equation={`S\\left(x\\right ) = \\frac{1}{1+e^{-x}}`} />}/>*/}
            <AltChart equationOverlay={<img src={SigmoidGif} />}/>
          </Grid>
          <Grid key="ChartText" item xs={12} lg={9} style={{padding: '150px'}}>
            <h1>Python Machine Learning</h1>
            <p>Project sub-title</p>
            <p>Eiusmod pariatur tempor ullamco esse do id irure id ex ut sed ullamco qui veniam cillum nulla incididunt est ullamco tempor voluptate excepteur amet reprehenderit tempor velit id et eu esse eu culpa veniam laboris sint excepteur nulla.</p>
            <LandingInfoLink text="View Guides" textColor="rgb(63,81,181)" bgColor="white" link="https://www.google.com" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

LandingInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingInfo);