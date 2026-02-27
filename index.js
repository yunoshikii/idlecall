// DisableCallIdle - Revenge Plugin
export default {
  name: "DisableCallIdle",
  description: "Prevents being kicked from voice calls due to idle timeout.",
  authors: [
    { name: "Nuckyz" },
    { name: "Converted for Revenge" }
  ],

  patches: [
    {
      find: "this.idleTimeout.start(",
      replace: "()=>{}"
    },
    {
      find: "this.idleTimeout.stop(",
      replace: "()=>{}"
    },
    {
      find: "handleIdleUpdate(){",
      replace: "handleIdleUpdate(){return;"
    }
  ]
};
