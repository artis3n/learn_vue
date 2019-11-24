export default {
    bind(el, binding, vnode) {
        if (binding.arg == 'click') {
            document.addEventListener('click', () => {
                const functionToCall = binding.value;
                functionToCall();
            });
        }
    },
}
