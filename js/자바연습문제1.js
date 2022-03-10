// 1번 문제

// let a = prompt('문자를 입력하세요');
// let b = prompt('문자를 입력하세요');

// document.write(b + " " + a)

// 2번 문제

// let n = prompt('숫자를 입력하세요.');
//     document.write(n + '<br>')
//     document.write(n + '<br>')
//     document.write(n + '<br>')

// 3번 문제

// let a = prompt('문자를 입력하세요');
// let b= prompt('문자를 입력하세요');
// document.write(b+a);

// 4번 문제

// let a = prompt('문자를 입력하세요.');
// let b = prompt('숫자를 입력하세요.');
// let x = " ";
// for(let i = 1; i <= b; i++){
//     x = x + a
// }
// document.write(x)

// 5번 문제

// let a = Number(prompt('숫자를 입력하세요.'));
// let b = Number(prompt('숫자를 입력하세요.'));
// let x = 1;
// for(let i = 1; i <= b; i++){
//     x = x * a
// }
// document.write(x);

// 6번 문제

// let a = Number(prompt('숫자를 입력하세요.'))
// let b = Number(prompt('숫자를 입력하세요.'))
// let c = Number(prompt('숫자를 입력하세요.'))

// document.write(a+b+c + ' ' + ((a+b+c)/3).toFixed(2))

// 7번 문제

// let a = Number(prompt('숫자를 입력하세요.'))
// let b = Number(prompt('숫자를 입력하세요.'))

// if(a > b){
//     document.write(a)
// }
// else{
//     document.write(b)
// }

// 8번 문제

// let y = Number(prompt('숫자를 입력하세요.'));
// let x = 0;

// for(let i = 1; i <= y; i++){
//     if(i % 2 == 0){
//         x = x + i
//     }
// }
// document.write(x)

// 9번 문제

// let n = prompt('숫자를 입력하세요.');
// let x = '';

// for(let i = 1; i <= n; i++){
//     if(i % 3 == 0){
//         continue
//     }
//     x = x + i + " ";
// }
// document.write(x);

// 10번 문제

// let n = prompt('숫자를 입력하세요.');

// for(let i = 0; i <= n; i++){
//     document.write(n-i + "<br>")
// }

// 11번 문제

// let n = prompt('날짜를 입력하세요.');
// let x = n.split('.');
// document.write(x[2] + '-' + x[1] + '-' + x[0])

// 12번 문제

// let n = prompt('시간을 입력하세요.');
// let x = n.split(':');
// document.write(x[1]);

// 13번 문제

// let n = prompt('문자를 입력하세요.');
// let x = n.split(' ');
// document.write(x[0]+x[1])

// 14번 문제

// let n = prompt('숫자를 입력하세요.');
// document.write(n*-1)

// 15번 문제
// let a = Number(prompt('숫자를 입력하세요.'));
// let b = Number(prompt('숫자를 입력하세요.'));

// document.write(a+b + '<br>')
// document.write(a-b + '<br>')
// document.write(a*b + '<br>')
// document.write(a/b + '<br>')
// document.write(a%b)

// 16번 문제

// let a = prompt('문자를 입력하세요.');
// let b = prompt('문자를 입력하세요.');

// if(a < b){
//     document.write('True')
// }
// else{
//     document.write('False')
// }

// 17번 문제

// let a = Number(prompt('숫자를 입력하세요.'));
// let b = Number(prompt('숫자를 입력하세요.'));

// if(a == b){
//     document.write('True')
// }
// else{
//     document.write('False')
// }

// 18번 문제

// let a = prompt('숫자를 입력하세요.');
// let b = prompt('숫자를 입력하세요.');
// let c = prompt('숫자를 입력하세요.');

// if(a > b){
//     if(b > c){
//         document.write(c)
//     }
// }
// if(b > a){
//     if(a > c){
//         document.write(c)
//     }
// }
// if(b > c){
//     if(c > a){
//         document.write(a)
//     }
// }
// if(c > b){
//     if(b > a){
//         document.write(a)
//     }
// }
// if(c > a){
//     if(a > b){
//         document.write(b)
//     }
// }
// if(a > c){
//     if(c > b){
//         document.write(b)
//     }
// }

// 19번 문제

// let n = prompt('숫자를 입력하세요.');

// for(let i = 0; i <= n; i++){
//     document.write(i + '<br>')
// }
// 20번 문제

// 21번 문제

// let n = prompt('숫자를 입력하세요.');
// let x = n.split(' ');

// for(let i = 0; i <= 100; i++){
//     if(x[i] % 2 == 0){
//         document.write(x[i] + '<br>')
//     }
// }

// 22번 문제(리턴 값 씀)

// let n = prompt('숫자를 입력하세요');
// let result = '';

// function f(){
//     if(n < 0 && n % 2 == 0){
//         result = 'A'
//     }
//     else if(n < 0 && n % 2 !=0){
//         result = 'B'
//     }
//     else if(n > 0 && n % 2 == 0){
//         result = 'C'
//     }
//     else if(n > 0 && n % 2 != 0){
//         result = 'D'
//     }
//     return result
// }
// document.write(f())


// 23번 문제

// let n = prompt('월을 입력하세요.');

// if(n == 3 || n == 4 || n == 5){
//     document.write('spring')
// }
// else if(n == 6 || n == 7 || n == 8){
//     document.write('summer')
// }
// else if(n == 9 || n == 10 || n == 11){
//     document.write('fall')
// }
// else if(n == 1 || n == 2 || n == 12){
//     document.write('winter')
// }

// 24번 문제

// let n = prompt('공을 던진 거리를 입력하세요.');

// if(n >= 50 && n <= 60){
//     document.write('win')
// }
// else{
//     document.write('lose')
// }

// 25번 문제

// let n = prompt('공을 던진 거리를 입력하세요.');

// if(n >= 50 && n <= 70 || n % 6 == 0){
//     document.write('win')
// }
// else{
//     document.write('lose')
// }

// 26번 문제
// 틀린 답안

// let n = prompt('숫자를 입력하세요.');
// let x = n.split(' ');
// let y = '';
// let y1 = '';
// let y2 = '';
// let y3 = x[0] + x[1]

//     if(x[0] % 2 == 0){
//         y = '짝수 +'
//     }
//     else{
//         y = '홀수 +'
//     }

//     if(x[1] % 2 == 0){
//         y1 = '짝수 ='
//     }
//     else{
//         y1 = '홀수 ='
//     }

//     if(y3 % 2 == 0){
//         y2 = '짝수'
//     }
//     else{
//         y2 = '홀수'
//     }
//     document.write(y + y1 + y2)

    
// 내가 푼 맞는 답안
// let n = prompt('숫자를 입력하세요.');
// let x = n.split(' ');

//     if(x[0] % 2 == 0){
//         if(x[1] % 2 == 0){
//             document.write('짝수+짝수=짝수')
//         }
//     }
//     if(x[0] % 2 != 0){
//         if(x[1] % 2 == 0){
//             document.write('홀수+짝수=홀수')
//         }
//     }
//     if(x[0] % 2 == 0){
//         if(x[1] % 2 != 0){
//             document.write('짝수+홀수=홀수')
//         }
//     }
//     if(x[0] % 2 != 0){
//         if(x[1] % 2 != 0){
//             document.write('홀수+홀수=홀수')
//         }
//     }

// 27번 문제

// ㅈㄴ 김

// let n = prompt('숫자를 입력하세요.');
// let x = n.split(' ');

// if(x[0] > x[1]){
//     if(x[1] > x[2]){
//         if(x[0] > x[2]){
//             document.write(x[1])
//         }
//         else{
//             document.write(x[1])
//         }
//     }
// }
// if(x[2] > x[1]){
//     if(x[1] > x[0]){
//         if(x[2]> x[0]){
//             document.write(x[1])
//         }
//         else{
//             document.write(x[1])
//         }
//     }
// }
// if(x[1] > x[2]){
//     if(x[2] > x[0]){
//         if(x[1]> x[0]){
//             document.write(x[2])
//         }
//         else{
//             document.write(x[2])
//         }
//     }
// }
// if(x[0] > x[2]){
//     if(x[2] > x[1]){
//         if(x[1]> x[0]){
//             document.write(x[2])
//         }
//         else{
//             document.write(x[2])
//         }
//     }
// }
// if(x[1] > x[0]){
//     if(x[0] > x[2]){
//         if(x[1]> x[2]){
//             document.write(x[0])
//         }
//         else{
//             document.write(x[0])
//         }
//     }
// }
// if(x[2] > x[0]){
//     if(x[0] > x[1]){
//         if(x[1]> x[2]){
//             document.write(x[0])
//         }
//         else{
//             document.write(x[0])
//         }
//     }
// }

// 다시 짬

// let n = prompt('숫자를 입력하세요.');
// let x = n.split(' ');

// if(x[0] <= x[1] && x[0] <= x[2]){
//     if(x[1] <= x[2]){
//         document.write(x[1])
//     }
//     else{
//         document.write(x[2])
//     }
// }
// if(x[1] <= x[0] && x[1] <= x[2]){
//     if(x[0] <= x[2]){
//         document.write(x[0])
//     }
//     else{
//         document.write(x[2])
//     }
// }
// if(x[2] <= x[1] && x[2] <= x[0]){
//     if(x[1] <= x[0]){
//         document.write(x[1])
//     }
//     else{
//         document.write(x[0])
//     }
// }

// 28번 문제

// let a = prompt('출생년도를 입력해 주세요.');
// let b = prompt('출생년도를 입력해 주세요.');
// let x = 0;

// if(b == 1){
//     x = 1900
// }
// else if(b == 2){
//     x = 2000
// }

// document.write(2012 - x - (a[0]*10) - a[1] + 1);

// 29번 문제

// let n = prompt('시간을 입력하세요.').split(' ');
// let x = ' ';

// if(n[1] < 30){
//     x = n[0]-1 + ' ' + (60 + (n[1]-30))
// }
// else if(n[1] > 30){
//     x = n[0] + ' ' + (n[1] - 30)
// }

// document.write(x)

// 30번 문제

// let n = prompt('숫자를 입력하세요.');
// let x = n.split(' ');

// let y = x.sort();

// document.write(y);
