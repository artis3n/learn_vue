export default {
    bind(el, binding, vnode) {
        if (binding.arg == 'click') {
            el.addEventListener('click', () => {
                const functionToCall = binding.value;
                functionToCall();
            });
        }
    },
}
