document.addEventListener('alpine:init', () => {
    Alpine.data('wordgameWidget', function(){
        return {
            sentence:'',
            LongWord: '',
            ShortWord:'',
            length:'',

            Wordgame() {

                this.LongWord = longestWord(this.sentence);
                this.ShortWord = shortestWord(this.sentence);
                this.length = wordLengths(this.sentence);

                setTimeout(() => {
                    this.sentence = '';
                    this.LongWord = '';
                    this.ShortWord = '';
                    this.length = '';
                }, 3000);
            }
        }
    });
})
