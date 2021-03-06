
export default [
  {
    deserialize(el, next) {
      switch (el.tagName) {
        case 'p': {
          return {
            kind: 'block',
            type: 'paragraph',
            nodes: next(el.children)
          }
        }
        case 'em': {
          return {
            kind: 'mark',
            type: 'italic',
            nodes: next(el.children)
          }
        }
        case 'strong': {
          return {
            kind: 'mark',
            type: 'bold',
            nodes: next(el.children)
          }
        }
      }
    }
  }
]
