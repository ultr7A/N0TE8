package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	fmt.Printf("Starting server at port 9091 \n")

	fileServer := http.FileServer(http.Dir("./client/dist"))
	http.Handle("/", fileServer)

	http.HandleFunc("/console", netconsole)

	if err := http.ListenAndServe(":9091", nil); err != nil {
		log.Fatal(err)
	}

}

func netconsole(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()

	if err != nil {
		fmt.Println("Error parsing form")
	}

	fmt.Fprintf(w, "LOG , %s!\n\n", r.FormValue("message")) //r.URL.Path[1:])
	writeMessagesToDisk([]byte(r.FormValue("message") + "\n"))
}

func writeMessagesToDisk(message []byte) {

	f, err := os.OpenFile("./log/messages.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)

	if err != nil {
		log.Fatal(err)
	}
	if _, err := f.Write([]byte(message)); err != nil {
		log.Fatal(err)
	}
	if err := f.Close(); err != nil {
		log.Fatal(err)
	}
}
