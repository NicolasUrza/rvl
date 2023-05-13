import socket

# Define el host y el puerto en el que se escucharán las conexiones
HOST = 'localhost'
PORT = 5000

# Crea el socket y configúralo para que escuche en el host y puerto especificados
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind((HOST, PORT))
server_socket.listen()

print(f'Servidor escuchando en {HOST}:{PORT}')

while True:
    # Espera a que llegue una conexión y acepta el socket
    client_socket, address = server_socket.accept()

    # Lee los datos enviados por el cliente
    data = client_socket.recv(1024).decode('utf-8')

    # Procesa los datos (en este ejemplo solo los imprime en la consola)
    print(f'Datos recibidos: {data}')

    # Cierra la conexión con el cliente
    client_socket.close()