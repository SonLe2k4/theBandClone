        const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const btnPay = document.querySelector('.js-pay')
        const closes = document.querySelectorAll('.js-close')
        const containerModal = document.querySelector('.js-container-modal')
        function showModal() {
            modal.classList.add('open') 
        }
        console.log(buyBtns);
        for(const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showModal)
        }
        function hideModal() {
            modal.classList.remove('open')
        }
        for(const close of closes) {
            close.addEventListener('click', hideModal)
        }
        modal.addEventListener('click', hideModal)
        containerModal.addEventListener('click', function (even) {
            even.stopPropagation()
        })
        btnPay.addEventListener('click', function(even) {
            alert("Have a good day, you bought the tickets")
        })