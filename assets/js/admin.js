document.addEventListener('DOMContentLoaded', function() {
    // 过滤功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const contentItems = document.querySelectorAll('.content-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 更新按钮状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 过滤内容
            const filter = this.getAttribute('data-filter');
            
            contentItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = '';
                } else if (filter === 'published' && !item.classList.contains('draft')) {
                    item.style.display = '';
                } else if (filter === 'draft' && item.classList.contains('draft')) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // 切换可见性功能（这里只是模拟，实际需要与后端API交互）
    const toggleButtons = document.querySelectorAll('.toggle-visibility');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const fileId = this.getAttribute('data-id');
            const row = this.closest('.content-item');
            const statusBadge = row.querySelector('.status-badge');
            
            // 在实际应用中，这里应该发送API请求来更改文件的draft状态
            // 这里只是前端模拟效果
            if (row.classList.contains('draft')) {
                row.classList.remove('draft');
                row.classList.add('published');
                statusBadge.textContent = '已发布';
                statusBadge.classList.remove('draft');
                statusBadge.classList.add('published');
                this.textContent = '隐藏';
                
                console.log(`Publishing: ${fileId}`);
            } else {
                row.classList.remove('published');
                row.classList.add('draft');
                statusBadge.textContent = '草稿';
                statusBadge.classList.remove('published');
                statusBadge.classList.add('draft');
                this.textContent = '发布';
                
                console.log(`Hiding: ${fileId}`);
            }
        });
    });
    
    // 编辑功能（这里只是模拟，实际需要与编辑器集成）
    const editButtons = document.querySelectorAll('.action-btn.edit');
    
    editButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const fileId = this.getAttribute('data-id');
            alert(`编辑功能尚未实现。文件路径: ${fileId}`);
        });
    });
}); 