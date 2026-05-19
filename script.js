// 轻微屏幕抖动效果（赛博朋克感）
document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    document.body.style.transform = 'translateX(1px)';
    setTimeout(() => {
      document.body.style.transform = 'translateX(0)';
    }, 50);
  }, 3000);
});