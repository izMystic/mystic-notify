const { useQuasar } = Quasar;
const { onMounted, onUnmounted } = Vue;
const app = Vue.createApp({
  setup() {
    const $q = useQuasar();
    const showNotif = (e) => {
      const text = e.data.text;
      const length = e.data.length;
      const type = e.data.type;
      const caption = e.data.caption;

      switch (type) {
        case 'success':
          classes = 'success';
          icon = 'done';
          break;
        case 'info':
          classes = 'info';
          icon = 'info';
          break;
        case 'error':
          classes = 'error';
          icon = 'dangerous';
          break;
        case 'warn':
          classes = 'warn';
          icon = 'warning';
          break;
      }

      if (text.length > 100) {
        multiline = true;
      } else {
        multiline = false;
      }

      $q.notify({
        message: text,
        caption: caption,
        multiLine: multiline,
        group: true,
        progress: true,
        position: 'top-right',
        timeout: length,
        icon: icon,
        classes: classes,
      });
    };
    onMounted(() => {
      window.addEventListener('message', showNotif);
    });
    onUnmounted(() => {
      window.removeEventListener('message', showNotif);
    });
    return {};
  },
});
app.use(Quasar, { config: {} });
app.mount('#notify');