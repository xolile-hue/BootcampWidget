document.addEventListener('alpine:init', () => {
    Alpine.data('transportFeeWidget', function () {
        return {
            workingShift: '',
            transportFeeMessage: '',
            calculate() {
                const message = transportFee(this.workingShift);
                this.transportFeeMessage = message;

                setTimeout(() => {
                    this.workingShift = '';
                    this.transportFeeMessage = '';
                }, 3000);
            }
        }
    });
}) 