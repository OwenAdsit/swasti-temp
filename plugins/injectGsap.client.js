import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
export default function(_, inject) {
    gsap.registerPlugin(SplitText)
    gsap.registerEffect({
        name: 'fade',
        effect: (targets, config) => {
            return gsap.fromTo(targets, { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: config.duration, stagger: config.stagger })
        },
        defaults: { duration: 1, stagger: 0.02 },
        extendTimeline: true
    })
    inject('gsap', gsap)
    inject('SplitText', SplitText)
}