const prikaz = document.querySelector(".prikaz");
const p_prikaz = document.querySelector("#prikaz");
const show_btn = document.querySelector("#show_btn");
const show_btn_one = document.querySelector("#show_btn_one");

class MyClass {
  constructor({ fullName, address, phone, course, element }) {
    this.fullName = fullName;
    this.address = address;
    this.phone = phone;
    this.course = course;
  }

  getInfo() {
    return `Name: ${this.fullName}\nAddress: ${this.address}\nPhone: ${this.phone}\nCourse: ${this.course}`;
  }
}

/*PROMISE METHOD TO DISPLAY STUDENT DATA*/

show_btn.addEventListener("click", () => {
  const res = fetch(
    "https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt"
  )
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("There is an error while rendering the data");
      }
      return res.text();
    })
    .then((res) => {
      return res.match(/(.+(\r\n)?){4}/g);
    })
    .then((res) => {
      return res.map((item) => item.trim().split("\r\n"));
    })
    .then((res) => {
      return res.map(
        ([fullName, address, phone, course]) =>
          new MyClass({ fullName, address, phone, course })
      );
    })
    .then((data) => {
      return Promise.all(
        data.map((res) => {
          p_prikaz.innerHTML += `${res.getInfo()} <br>`;
        })
      );
    })
    .catch((err) => {
      p_prikaz.innerHTML = `There has been an error ${err.message}`;
      p_prikaz.style.color = "red";
    })
    .finally(() => {
      loaderOne.style.display = " none";
    });
});

/*ASYNC METHOD TO DISPLAY STUDENT DATA*/

const getFullData = async () => {
  try {
    const res = await fetch(
      "https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt"
    );

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const text = await res.text();
    const chunked = text.match(/(.+(\r\n)?){4}/g);
    const peopleArrays = chunked.map((item) => item.trim().split("\r\n"));
    return peopleArrays;
  } catch (err) {
    prikaz.innerHTML = `There has been an error ${err.message}`;
    prikaz.style.color = "red";
  } finally {
    loader.style.display = "none";
  }
};

const run = async () => {
  const loaderDisplay = await setLoader();
  const people = await getFullData();
  const instances = people.map(
    ([fullName, address, phone, course]) =>
      new MyClass({ fullName, address, phone, course })
  );
  // prikazuje ceo niz
  Promise.all(
    instances.map((data) => {
      prikaz.innerHTML += `${data.getInfo()} <br>`;
    })
  );
};

const setLoader = async (time) => {
  const loader = await document.querySelector("#loader");
  loader.style.display = "inline-block";
  const setLoader = await new Promise((res) => {
    setTimeout(res, 1000, loader);
  });
};

show_btn_one.addEventListener("click", run);
