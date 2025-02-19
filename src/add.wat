(module
  (import "env" "log" (func $log (param i32)))
  (func (export "run") 
    i32.const 42
    call $log 
  )
)