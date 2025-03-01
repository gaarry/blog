document.addEventListener('DOMContentLoaded', function() {
    // 查找所有带有 toggle-container 类的元素
    const toggleContainers = document.querySelectorAll('.toggle-container');
    
    toggleContainers.forEach(container => {
        const toggleButton = container.querySelector('.toggle-button');
        const toggleContent = container.querySelector('.toggle-content');
        
        // 初始状态设置
        if (container.classList.contains('closed')) {
            toggleContent.style.display = 'none';
        }
        
        // 添加点击事件监听器
        toggleButton.addEventListener('click', function() {
            // 切换内容的显示状态
            if (toggleContent.style.display === 'none') {
                toggleContent.style.display = 'block';
                container.classList.remove('closed');
                container.classList.add('open');
                toggleButton.innerHTML = '<span class="toggle-icon">−</span> ' + toggleButton.getAttribute('data-hide-text');
                
                // 平滑滚动到可见内容
                toggleContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                toggleContent.style.display = 'none';
                container.classList.remove('open');
                container.classList.add('closed');
                toggleButton.innerHTML = '<span class="toggle-icon">+</span> ' + toggleButton.getAttribute('data-show-text');
            }
        });
    });
}); 