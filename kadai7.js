class Taiyaki{
    constructor(anko,cream,theese){
        this.anko=anko;
        this.cream=cream;
        this.theese=theese;
    }
    wagashi(){
        console.log('中身は'+this.anko+'です');
        console.log('中身は'+this.cream+'です');
        console.log('中身は'+this.theese+'です');
    }
}
let nakami= new Taiyaki('あんこ','クリーム','チーズ');
nakami.wagashi();