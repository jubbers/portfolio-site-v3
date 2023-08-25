import styled from 'styled-components';
import { Colors } from './Colors';

const FancyText = styled.span`
  background: linear-gradient(120deg, ${Colors.button.primary}, ${Colors.accent});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default FancyText