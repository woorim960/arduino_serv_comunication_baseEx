#define LED 12

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
}

void loop() {
  int incomingValue = 0;
  
  if (Serial.available() > 0) {
    incomingValue = Serial.read();
  }
  
  if (incomingValue == 49) {
    digitalWrite(LED, HIGH);
  } else if (incomingValue == 48) {
    digitalWrite(LED, LOW);
  }

  delay(3000);
}
