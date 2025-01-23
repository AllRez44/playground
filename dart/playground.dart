import 'dart:ffi';

void main() {
  print('Hello, world!');
  a = '1 só que string';
  print(a);
  ShippingStatus shipping = ShippingStatus.AWAITING_PAYMENT;
  print(shipping.toValue());
  print(shipping.getName());
  var tv = new TV();
  print("is TV on? " + tv.isOn.toString());
  print("Turning TV on...");
  tv.toggleOn();
  if (tv.isOn) {
    print("TV is on!");
  } else {
    print("TV is still off. Something went wrong.");
  }
  print("Current Channel is ${tv.channel.id.toString()} (${tv.channel.name})");
  print("Setting TV channel to " + TVChannel.CARTOON_NETWORK.name + "...");
  tv.channel = TVChannel.CARTOON_NETWORK;
  print("Current Channel is " +
      tv.channel.id.toString() +
      " (" +
      tv.channel.name +
      ")");
    var nullVar = null;
    if (nullVar is Instance)
  print(nullVar);
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
  final String _name;
  String getSpecies() => _species;
  String getSpeciesType() => _speciesType;
  int getLegAmount() => 2;

  Human(this._name);
}

// OLD WAY OF DOING ENUMS
enum ShippingStatus {
  AWAITING_PAYMENT,
  PENDING,
  SHIPPED,
  DELIVERED,
}

extension EnumShippingStatus on ShippingStatus {
  toValue() {
    return {
      ShippingStatus.AWAITING_PAYMENT: 1,
      ShippingStatus.PENDING: 2,
      ShippingStatus.SHIPPED: 3,
      ShippingStatus.DELIVERED: 4,
    }[this];
  }

  getName() {
    return {
      ShippingStatus.AWAITING_PAYMENT: 'Awaiting Payment',
      ShippingStatus.PENDING: 'Pending',
      ShippingStatus.SHIPPED: 'Shipped',
      ShippingStatus.DELIVERED: 'Delivered',
    }[this];
  }
}

// NEW WAY OF DOING ENUMS
enum TVChannel {
  OFF(null, ''),
  DEFAULT(1, 'Network Sponsors Commercials Channel'),
  CARTOON_NETWORK(100, 'Cartoon Network'),
  NICKELODEON(120, 'Nickelodeon'),
  DISNEY_CHANNEL(110, 'Disney Channel'),
  DISNEY_XD(115, 'Disney XD');

  final int? id;
  final String name;

  const TVChannel(this.id, this.name);
}

class TV {
  bool _on = false;
  TVChannel _channel = TVChannel.OFF;

  bool get isOn => _on;

  void toggleOn() => {
        _on = !_on,
        if (_on == false)
          {_channel = TVChannel.OFF}
        else
          _channel = TVChannel.DEFAULT
      };

  TVChannel get channel => _channel;
  void set channel(TVChannel newChannel) => {
        if (_on == false) {_channel = TVChannel.OFF} else _channel = newChannel
      };
}
