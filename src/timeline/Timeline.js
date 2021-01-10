import { TimelineMax as Timeline, Power1 } from 'gsap';

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector('.nav');
  const background = node.querySelector('.portBackground');

  timeline
    .from(background, 1, { display: 'none', y: 500, delay, ease: Power1.easeIn })
    .to(content, 0.5, { y: 20, opacity: 1, delay })

  return timeline;
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const texts = node.querySelectorAll('nav');

  timeline
  .to(texts, 0.8, { y: -50, delay });

  return timeline;
}

export const playOne = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5
  let timeline

  if (pathname === '/') 
    timeline = getHomeTimeline(node, delay)
   else 
      timeline = getDefaultTimeline(node, delay)
     
  timeline.play()
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 1, { ease: Power1.easeOut });
  timeline.play();
}