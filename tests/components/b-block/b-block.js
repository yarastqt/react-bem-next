import { BemComponent } from 'bem-react-next'


export class BBlock extends BemComponent {
  constructor(props) {
    super(props)
    this.block = 'BBlock'
  }

  tag() {
    return 'a'
  }

  attrs() {
    return {
      id: this.uuid,
    }
  }

  content({ children }) {
    return ['content', children]
  }
}
