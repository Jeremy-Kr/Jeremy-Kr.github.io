---
date: '2023-03-28'
title: 'Dart 기본 문법 공부'
categories: ['Dart']
summary: '첫번째 객체지향 언어'
thumbnail: './dart.png'
---

## Dart

Dart는 구글에서 만든 객체지향 언어다.

기본적으로 main 함수를 가지고 있고, main 함수는 프로그램의 시작점이다.

포메터가 자동으로 세미콜론을 붙여주지 않기 때문에, 세미콜론을 붙여줘야 한다.

아래는 Dart의 기본적인 문법이다.

## 1. 변수

1. var

   var 키워드를 사용하여 **변수를 선언**할 수 있습니다.

   var 키워드는 관습적으로 함수 또는 메소드의 지역변수를 선언할 때 사용합니다.

   그 외 클래스 또는 프로퍼티의 경우에는 타입을 명시해주는 것이 좋습니다.

2. dynamic

   dynamic 타입은 **모든 타입을 허용**합니다.

   ```dart
   void main() {
   var name;
   name = 'John';
   }
   ```

   ```dart
   void main() {
   dynamic name;
   name = 'John';
   }
   ```

3. null safety

   null safety는 TypeScript의 **strict mode**와 같은 개념입니다.

   변수를 선언할 때 타입 뒤에 ?를 붙여주면 null을 허용합니다.

   ```dart
   void main() {
   String? name;
   name = null;
   if(name != null) {
       name.isNotEmpty;
   }
   // name?.isNotEmpty;
   }
   ```

4. final

   final 키워드는 **한 번 값을 할당하면 변경할 수 없는** 상수입니다.

   JavaScript의 const와 유사합니다.

   ```dart
   void main() {
   final name = 'John';
   // name = 'Doe';
   }
   ```

5. late

   late 키워드는 변수를 **선언할 때 값을 할당하지 않고**, 나중에 할당할 수 있습니다.

   ```dart
   void main() {
   late final String name;
   name = 'John';
   }
   ```

6. const

   const 키워드는 **컴파일 시점**에 값을 할당해야 합니다. (런타임 시점에 값을 할당할 수 없습니다.)

   ```dart
   void main() {
   const name = 'John';
   // name = 'Doe';
   }
   ```

## 2. 데이터 타입

dart에서 모든 데이터 타입은 객체입니다. (class로 구현되어 있습니다.)

1. String

   ```dart
   void main() {
   String name = 'John';
   String name2 = "John";
   String name3 = '''John''';
   String name4 = """John""";
   }
   ```

2. int

   ```dart
   void main() {
   int age = 10;
   int age2 = 0x10;
   int age3 = 0b10;
   int age4 = 0x10;
   }
   ```

3. double

   ```dart
   void main() {
   double height = 10.0;
   double height2 = 10;
   }
   ```

4. num

   ```dart
   void main() {
   num age = 10;
   num height = 10.0;
   }
   ```

5. bool

   ```dart
   void main() {
   bool isTrue = true;
   bool isFalse = false;
   }
   ```

6. List

   List는 **배열**을 의미합니다.

   ```dart
   void main() {
   List<String> names = ['John', 'Doe',];
   }
   ```

   collection if를 사용하면 조건에 따라 리스트에 값을 추가할 수 있습니다.

   ```dart
   void main() {
   List<String> names = ['John', 'Doe',];
   List<String> names2 = ['John', 'Doe', if(true) 'Jane'];
   }
   ```

   collection for를 사용하면 반복문을 사용하여 리스트에 값을 추가할 수 있습니다.

   ```dart
   void main() {
   List<String> names = ['John', 'Doe',];
   List<String> names2 = ['bar', 'foo', for(var name in names) '$name',];
   }
   ```

7. Map

   Map은 **객체**를 의미합니다.

   ```dart
   void main() {
   // 첫번째는 key의 타입, 두번째는 value의 타입입니다.
   Map<String, Object> user = {
       'name': 'John',
       'age': '10',
   };
   }
   // Object는 모든 타입을 허용합니다(any).
   ```

8. Set

   Set은 **집합**을 의미합니다.

   ```dart
   void main() {
   Set<String> names = {'John', 'Doe',};
   }
   ```

## 3. 함수

1. 함수 선언 및 호출

   ```dart
   String sayHello(String name) {
   return 'Hello $name';
   }

   void main() {
   print(sayHello('John'));
   }
   ```

2. fat arrow function

   fat arrow function은 **한 줄로 함수를 선언**할 수 있습니다.

   ```dart
   String sayHello(String name) => 'Hello $name';

   void main() {
   print(sayHello('John'));
   }
   ```

3. named parameter

   named parameter는 **함수의 인자를 명시적으로 지정**할 수 있습니다.

   ```dart
   String sayHello({String name = 'John', required String lastName, int? age}) {
     return 'Hello $name $lastName $age';
   }

   void main() {
     print(sayHello(lastName: 'Doe', age: 10));
   }
   ```

4. optional positional parameter

   optional positional parameter는 **함수의 인자를 선택적으로 지정**할 수 있습니다.

   ```dart
   String sayHello(String name, [String lastName = 'Doe', int? age]) {
     return 'Hello $name $lastName $age';
   }

   void main() {
     print(sayHello('John'));
   }
   ```

## 4. 특별한 연산자

1. ??

   ?? 연산자는 **null safety**를 위해 사용됩니다.

   ```dart
   void main() {
     String? name;
     String name2 = name ?? 'John';
     print(name2);
   }
   ```

2. ??=

   ??= 연산자는 **null safety**를 위해 사용됩니다.

   ```dart
   void main() {
     String? name;
     name ??= 'John';
     print(name);
   }
   ```

## 5. 클래스

1. 클래스 선언

```dart
class User {
  final String name;
  int age;

  User(this.name, this.age);

  void sayHello() {
    print('Hello $name');
  }
}

void main() {
   var user = User('John', 10);
   user.sayHello();
}
```

2. named constructor parameter

```dart
class User {
  final String name;
  int age;

  User({required this.name, required this.age});

  void sayHello() {
    print('Hello $name');
  }
}

void main() {
   var user = User(name: 'John', age: 10);
   user.sayHello();
}
```

3. named constructor

```dart
class User {
  final String name;
  int age;

  User({required this.name, required this.age});

  User.guest({required int age}) : this(name: 'Guest', age: age);

  void sayHello() {
    print('Hello $name');
  }
}

void main() {
   var user = User.guest();
   user.sayHello();
}
```

4. cascade notation

```dart
class User {
  final String name;
  int age;

  User({required this.name, required this.age});

  User.guest({required int age}) : this(name: 'Guest', age: age);

  void sayHello() {
    print('Hello $name');
  }
}

void main() {
   var user = User.guest(age: 10)
     ..name = 'John'
     ..sayHello();
}
```

5. enums

```dart
enum Name {
  John,
  Jane,
}

void main() {
  print(Name.John);
}
```

6. abstract class

```dart
abstract class User {
  String name;
  int age;

  User({required this.name, required this.age});

  void sayHello();
}

class Guest extends User {
  Guest({required int age}) : super(name: 'Guest', age: age);

  @override
  void sayHello() {
    print('Hello $name');
  }
}

void main() {
  var user = Guest(age: 10);
  user.sayHello();
}
```

7. inheritance

```dart
class User {
  String name;
  int age;

  User({required this.name, required this.age});

  void sayHello() {
    print('Hello $name');
  }
}

class Guest extends User {
  Guest({required int age}) : super(name: 'Guest', age: age);

  @override
  void sayHello() {
    print('Hello $name');
  }
}

void main() {
  var user = Guest(age: 10);
  user.sayHello();
}
```

8. mixin

```dart
class User {
  String name;
  int age;

  User({required this.name, required this.age});

  void sayHello() {
    print('Hello $name');
  }
}

class Guest extends User with CanSayHello {
  Guest({required int age}) : super(name: 'Guest', age: age);
}

mixin CanSayHello {
  void sayHello() {
    print('Hello');
  }
}

void main() {
  var user = Guest(age: 10);
  user.sayHello();
}
```
