// DisableCallIdle Revenge Plugin
// Converted from Vencord plugin

export default {
  name: "DisableCallIdle",
  description: "Prevents being kicked from voice calls due to idle timeout.",
  authors: [
    {
      name: "Nuckyz",
    },
    {
      name: "Converted by ChatGPT",
    }
  ],

  patches: [
    {
      find: "this.idleTimeout.start(",
      replace: {
        match: /this\.idleTimeout\.(start|stop)/g,
        replace: "()=>{}"
      }
    },
    {
      find: "handleIdleUpdate(){",
      replace: {
        match: "handleIdleUpdate(){",
        replace: "handleIdleUpdate(){return;"
      }
    }
  ]
};
