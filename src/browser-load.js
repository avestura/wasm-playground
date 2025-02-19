const wasmModule = await WebAssembly.instantiateStreaming(fetch("example.wasm"), {
  env: {
    log: (x) => console.log("WASM says:", x)
  }
});

wasmModule.instance.exports.run();