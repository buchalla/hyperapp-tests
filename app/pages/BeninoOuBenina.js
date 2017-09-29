import { h } from 'hyperapp';
import BeninoOuBeninaContainer from '../containers/BeninoOuBenina';

const BeninoOuBenina = () => {
  return (
    <div>
      <h1 style={{"text-align": "center"}}>É benino ou benina?</h1>
      <BeninoOuBeninaContainer />
    </div>
  )
}

export default BeninoOuBenina;
