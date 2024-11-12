const aplicaciones = [
    { nombre: "Explorador de Archivos", comando: "explorer" },
    { nombre: "Google Chrome", comando: "chrome" },
    { nombre: "Mozilla Firefox", comando: "firefox" },
    { nombre: "Microsoft Edge", comando: "msedge" },
    { nombre: "Bloc de Notas", comando: "notepad" },
    { nombre: "WordPad", comando: "wordpad" },
    { nombre: "Microsoft Word", comando: "winword" },
    { nombre: "Microsoft Excel", comando: "excel" },
    { nombre: "Microsoft PowerPoint", comando: "powerpnt" },
    { nombre: "Símbolo del Sistema", comando: "cmd" },
    { nombre: "PowerShell", comando: "powershell" },
    { nombre: "Administrador de Tareas", comando: "taskmgr" },
    { nombre: "Panel de Control", comando: "control" },
    { nombre: "Configuración del Sistema", comando: "msconfig" },
    { nombre: "Editor del Registro", comando: "regedit" },
    { nombre: "Herramienta de Diagnóstico DirectX", comando: "dxdiag" },
    { nombre: "Servicios de Windows", comando: "services.msc" },
    { nombre: "Administración de Equipos", comando: "compmgmt.msc" },
    { nombre: "Visor de Eventos", comando: "eventvwr" },
    { nombre: "Monitor de Recursos", comando: "resmon" },
    { nombre: "Monitor de Rendimiento", comando: "perfmon" },
    { nombre: "Liberador de Espacio en Disco", comando: "cleanmgr" },
    { nombre: "Conexión a Escritorio Remoto", comando: "mstsc" },
    { nombre: "Administrador de Discos", comando: "diskmgmt.msc" },
    { nombre: "Administrador de Dispositivos", comando: "devmgmt.msc" },
    { nombre: "Configuraciones de Conexiones de Red", comando: "ncpa.cpl" },
    { nombre: "Propiedades de Internet", comando: "inetcpl.cpl" },
    { nombre: "Firewall de Windows", comando: "wf.msc" },
    { nombre: "Calculadora", comando: "calc" },
    { nombre: "Paint", comando: "mspaint" },
    { nombre: "Recortes de Pantalla", comando: "snippingtool" },
    { nombre: "Lupa de Windows", comando: "magnify" },
    { nombre: "Teclado en Pantalla", comando: "osk" },
    { nombre: "VLC Media Player", comando: "vlc" },
    { nombre: "Apagar el Equipo", comando: "shutdown /s /f /t 0" },
    { nombre: "Reiniciar el Equipo", comando: "shutdown /r /f /t 0" },
];

function llenarOpciones() {
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(select => {
        aplicaciones.forEach(app => {
            const option = document.createElement('option');
            option.value = app.comando;
            option.textContent = app.nombre;
            select.appendChild(option);
        });
    });
}

function generarCodigo() {
    const app1 = document.getElementById('app1').value;
    const app2 = document.getElementById('app2').value;
    const app3 = document.getElementById('app3').value;
    const app4 = document.getElementById('app4').value;
    const app5 = document.getElementById('app5').value;
    const app6 = document.getElementById('app6').value;
    const app7 = document.getElementById('app7').value;
    const app8 = document.getElementById('app8').value;
    const app9 = document.getElementById('app9').value;

    const codigo = `
import time
import digitalio
import board
import usb_hid
from adafruit_hid.keyboard import Keyboard
from adafruit_hid.keycode import Keycode

teclado = Keyboard(usb_hid.devices)

# Configuración de pines para botones y LED
boton1_pin = board.GP16
boton2_pin = board.GP17
boton3_pin = board.GP18
boton4_pin = board.GP19
boton5_pin = board.GP22
boton6_pin = board.GP20
boton7_pin = board.GP26
boton8_pin = board.GP27
boton9_pin = board.GP21
led_pin = board.GP25

# Configuración de botones
boton1 = digitalio.DigitalInOut(boton1_pin)
boton1.switch_to_input(pull=digitalio.Pull.DOWN)

boton2 = digitalio.DigitalInOut(boton2_pin)
boton2.switch_to_input(pull=digitalio.Pull.DOWN)

boton3 = digitalio.DigitalInOut(boton3_pin)
boton3.switch_to_input(pull=digitalio.Pull.DOWN)

boton4 = digitalio.DigitalInOut(boton4_pin)
boton4.switch_to_input(pull=digitalio.Pull.DOWN)

boton5 = digitalio.DigitalInOut(boton5_pin)
boton5.switch_to_input(pull=digitalio.Pull.DOWN)

boton6 = digitalio.DigitalInOut(boton6_pin)
boton6.switch_to_input(pull=digitalio.Pull.DOWN)

boton7 = digitalio.DigitalInOut(boton7_pin)
boton7.switch_to_input(pull=digitalio.Pull.DOWN)

boton8 = digitalio.DigitalInOut(boton8_pin)
boton8.switch_to_input(pull=digitalio.Pull.DOWN)

boton9 = digitalio.DigitalInOut(boton9_pin)
boton9.switch_to_input(pull=digitalio.Pull.DOWN)

# Configuración de LED
led = digitalio.DigitalInOut(led_pin)
led.switch_to_output()
led.value = False  # Inicialmente apagado

def encender_led():
    led.value = True

def apagar_led():
    led.value = False

def escribir_texto(texto):
    for char in texto:
        if char.isupper():
            teclado.send(Keycode.SHIFT, getattr(Keycode, char.upper()))
        else:
            teclado.send(getattr(Keycode, char.upper()))
        time.sleep(0.1)

try:
    while True:
        # Verificar los botones de acción
        if boton1.value:
            print("Botón 1 - Abrir ${app1}")
            teclado.send(Keycode.GUI, Keycode.R)
            time.sleep(0.5)
            escribir_texto("${app1}")
            teclado.send(Keycode.ENTER)
            time.sleep(0.5)

        if boton2.value:
            print("Botón 2 - Abrir ${app2}")
            teclado.send(Keycode.GUI, Keycode.R)
            time.sleep(0.5)
            escribir_texto("${app2}")
            teclado.send(Keycode.ENTER)
            time.sleep(0.5)

        if boton3.value:
            print("Botón 3 - Abrir ${app3}")
            teclado.send(Keycode.GUI, Keycode.R)
            time.sleep(0.5)
            escribir_texto("${app3}")
            teclado.send(Keycode.ENTER)
            time.sleep(0.5)

        if boton4.value:
            print("Botón 4 - Abrir ${app4}")
            teclado.send(Keycode.GUI, Keycode.R)
            time.sleep(0.5)
            escribir_texto("${app4}")
            teclado.send(Keycode.ENTER)
            time.sleep(0.5)

        if boton5.value:
            print("Botón 5 - Abrir ${app5}")
            teclado.send(Keycode.GUI, Keycode.R)
            time.sleep(0.5)
            escribir_texto("${app5}")
            teclado.send(Keycode.ENTER)
            time.sleep(0.5)

        if boton6.value:
            print("Botón 6 - Abrir ${app6}")
            teclado.send(Keycode.GUI, Keycode.R)
            time.sleep(0.5)
            escribir_texto("${app6}")
            teclado.send(Keycode.ENTER)
            time.sleep(0.5)

        if boton7.value:
            print("Botón 7 - Abrir ${app7}")
            teclado.send(Keycode.GUI, Keycode.R)
            time.sleep(0.5)
            escribir_texto("${app7}")
            teclado.send(Keycode.ENTER)
            time.sleep(0.5)

        if boton8.value:
            print("Botón 8 - Abrir ${app8}")
            teclado.send(Keycode.GUI, Keycode.R)
            time.sleep(0.5)
            escribir_texto("${app8}")
            teclado.send(Keycode.ENTER)
            time.sleep(0.5)

        if boton9.value:
            print("Botón 9 - Abrir ${app9}")
            teclado.send(Keycode.GUI, Keycode.R)
            time.sleep(0.5)
            escribir_texto("${app9}")
            teclado.send(Keycode.ENTER)
            time.sleep(0.5)

except KeyboardInterrupt:
    apagar_led()
    print("\\nPrograma terminado por el usuario")
`;

    document.getElementById('codigoOutput').textContent = codigo;
    document.getElementById('downloadBtn').style.display = 'block';
}

function descargarCodigo() {
    const codigo = document.getElementById('codigoOutput').textContent;
    const blob = new Blob([codigo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'codigo_generado.py';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

window.onload = llenarOpciones;
