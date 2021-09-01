/** 
* @author: Alexander Chi
* @description:
* @date: 30/Agosto/2021
**/  
import './App.scss';
import {Card} from './components/cards';
import header from './assets/image/image-header-desktop.jpg';

function App() {
  return (
    <div className="container">
      <Card 
        title={<>Get {<span>insights</span>} that help your business grow.</>}
        description='Discover the benefits of data analytics and make better decisions regarding revenue. customer experience, and overall efficiency.'
        items={[
          {number: '10k+', text: 'Companies'},
          {number: '314', text: 'Templates'},
          {number: '112M+', text: 'Queries'}
        ]}
        src={header}/>
    </div>
  );
}

export default App;
