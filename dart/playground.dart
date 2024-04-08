import 'dart:ffi';

void main() {
  print('Hello, world!');
  a = '1 só que string';
  print(a);
}

dynamic a = 1;

abstract interface class Animal {
  String getSpecies();
  String getSpeciesType();
  int getLegAmount();
}

class Human extends Animal {
  final _species = 'human';
  final _speciesType = 'mammal';
  String getSpecies() => _species;
  String getSpeciesType() => _speciesType;
  int getLegAmount() => 2;
}

