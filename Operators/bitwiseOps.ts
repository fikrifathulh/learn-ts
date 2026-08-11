function bitwiseOps() {
  const a: number = 5;
  const b: number = 3;

  console.log(`a = ${a} & b = ${b}\n`);

  console.log("Bitwise AND (&):\n");
  console.log("a & b = " + (a & b) + "\n");
  console.log("Bitwise OR (|):\n");
  console.log("a | b = " + (a | b) + "\n");
  console.log("Bitwise XOR (^):\n");
  console.log("a ^ b = " + (a ^ b) + "\n");
  console.log("Left shift (<<):\n");
  console.log("a << 1 = " + (a << 1) + "\n");
  console.log("Right shift (>>):\n");
  console.log("a >> 1 = " + (a >> 1) + "\n");

  let c: number = a;

  console.log("c = a");

  console.log("AND assignment (&=): ");
  c &= b;
  console.log(c);
  console.log("OR assignment (|=): ");
  c = a;
  c |= b;
  console.log(c);
  console.log("XOR assignment (^=): ");
  c = a;
  c ^= b;
  console.log(c);
  console.log("Left shift assignment (<<=): ");
  c = a;
  c <<= 1;
  console.log(c);
  console.log("Right shift assignment (>>=): ");
  c = a;
  c >>= 1;
  console.log(c);
}

bitwiseOps();
