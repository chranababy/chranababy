window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZCMY9K9K16');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-gtag-event]').forEach(link => {
      link.addEventListener('click', () => {
        const eventName = link.getAttribute('data-gtag-event');
        gtag('event', eventName, {
          event_category: 'link',
          event_label: link.href
        });
      });
    });
  });
