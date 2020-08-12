import { cTB, c, cB, cNotM } from '../../../_utils/cssr'
import fadeInTransition from '../../../styles/_transitions/fade-in'
import fadeInScaleUpTransition from '../../../styles/_transitions/fade-in-scale-up'

export default c([
  ({ props }) => {
    const {
      easeOutCubicBezier
    } = props.$base
    const {
      color
    } = props.$local
    return [
      cTB('modal-content', [
        cB('card', {
          raw: `
            background-color: ${color};
          `
        }),
        cB('confirm', {
          raw: `
            width: 446px;
            max-width: calc(100vw - 32px);
          `
        })
      ]),
      cB('modal-container', {
        raw: `
          position: fixed;
          left: 0;
          top: 0;
          height: 0;
          width: 0;
          display: flex;
        `
      }),
      cB('modal-overlay', {
        raw: `
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, .4);
        `
      }, [
        fadeInTransition({
          enterDuration: '.25s',
          leaveDuration: '.25s',
          enterCubicBezier: easeOutCubicBezier,
          leaveCubicBezier: easeOutCubicBezier
        })
      ]),
      cB('modal-content', {
        raw: `
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          overflow: visible;
        `
      }, [
        c('>', [
          cB('scrollbar', [
            c('>', [
              cB('scrollbar-container', [
                c('>', [
                  cB('scrollbar-content', {
                    raw: `
                      min-height: 100%;
                      display: flex;
                    `
                  })
                ])
              ])
            ])
          ])
        ]),
        cNotM('active', {
          raw: `
            visibility: hidden;
          `
        })
      ]),
      cB('modal-content-slot', {
        raw: `
          position: relative;
        `
      }, [
        fadeInScaleUpTransition({
          duration: '.25s',
          enterScale: '.5'
        })
      ])
    ]
  }
])
