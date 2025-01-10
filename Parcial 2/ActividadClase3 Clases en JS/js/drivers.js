// Clase Vehiculo
class Vehiculo {
    constructor(id, plateNumber, model, capacity) {
      this.id = id;
      this.plateNumber = plateNumber;
      this.model = model;
      this.capacity = capacity;
    }
  
    // Método para obtener información del vehículo
    getVehicleInfo() {
      return {
        id: this.id,
        plateNumber: this.plateNumber,
        model: this.model,
        capacity: this.capacity,
      };
    }
  }
  
  // Clase Conductor
  class Conductor {
    #licenseNumber;  // Propiedad privada
    #phoneNumber;    // Propiedad privada
    #numberTrips;    // Propiedad privada
    #isVIP;          // Propiedad privada para determinar si el conductor es VIP
  
    constructor(id, name, licenseNumber, phoneNumber) {
      this.id = id;
      this.name = name;
      this.#licenseNumber = licenseNumber;
      this.#phoneNumber = phoneNumber;
      this.#numberTrips = 0;
      this.#isVIP = false;  // Inicialmente no es VIP
      this.assignedVehicle = null; // Vehículo asignado
    }
  
    // Método para asignar un vehículo al conductor
    assignVehicle(vehicle) {
      this.assignedVehicle = vehicle;
    }
  
    // Método para obtener la información del conductor
    getDriverInfo() {
      return {
        id: this.id,
        name: this.name,
        licenseNumber: this.#licenseNumber,
        phoneNumber: this.#phoneNumber,
        isVIP: this.#isVIP,  // Incluir el estado de VIP en la información
      };
    }
  
    // Método para registrar un viaje
    registerTrip() {
      this.#numberTrips++;
      this.checkVIPStatus(); // Comprobar si el conductor se convierte en VIP
    }
  
    // Método para acceder al número de viajes realizados
    getTrips() {
      return this.#numberTrips;
    }
  
    // Método para verificar si el conductor se convierte en VIP después de 5 viajes
    checkVIPStatus() {
      if (this.#numberTrips >= 5 && !this.#isVIP) {
        this.#isVIP = true; // El conductor se convierte en VIP
        console.log(this.name + ' se ha convertido en conductor VIP después de ' + this.#numberTrips + ' viajes.');
      }
    }
  
    // Método para acceder al número de licencia
    getLicenseNumber() {
      return this.#licenseNumber;
    }
  
    // Método para acceder al número de teléfono
    getPhoneNumber() {
      return this.#phoneNumber;
    }
  }
  
  // Ejemplo de uso:
  
  // Crear vehículos
  let vehicle1 = new Vehiculo(1, 'ABC123', 'Toyota Prius', 5);
  let vehicle2 = new Vehiculo(2, 'XYZ789', 'Honda Civic', 5);
  
  // Crear un conductor regular
  let conductor1 = new Conductor(1, 'Juan Pérez', 'LIC123', '123-456-789');
  conductor1.assignVehicle(vehicle1);  // Asignar un vehículo
  console.log(conductor1.getDriverInfo());
  conductor1.registerTrip();  // Registrar un viaje
  console.log('Viajes realizados: ' + conductor1.getTrips());
  conductor1.registerTrip();  // Registrar otro viaje
  console.log('Viajes realizados: ' + conductor1.getTrips());
  conductor1.registerTrip();  // Registrar otro viaje
  console.log(conductor1.getDriverInfo());

  // Crear otro conductor regular
  let conductorVIP = new Conductor(2, 'Ana Gómez', 'LIC456', '987-654-321');
  conductorVIP.assignVehicle(vehicle2);  // Asignar un vehículo
  console.log(conductorVIP.getDriverInfo());
  conductorVIP.registerTrip();  // Registrar un viaje
  console.log('Viajes realizados: ' + conductorVIP.getTrips());
  conductorVIP.registerTrip();  // Registrar otro viaje
  console.log('Viajes realizados: ' + conductorVIP.getTrips());
  conductorVIP.registerTrip();  // Registrar otro viaje
  console.log('Viajes realizados: ' + conductorVIP.getTrips());
  conductorVIP.registerTrip();  // Registrar otro viaje
  console.log('Viajes realizados: ' + conductorVIP.getTrips());
  conductorVIP.registerTrip();  // Registrar el quinto viaje y convertirlo en VIP
  console.log(conductorVIP.getDriverInfo());
  console.log('Viajes realizados: ' + conductorVIP.getTrips());
  