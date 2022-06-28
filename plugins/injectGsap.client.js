import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
export default function(_, inject) {
    gsap.registerPlugin(SplitText)
    inject('gsap', gsap)
    inject('SplitText', SplitText)
}