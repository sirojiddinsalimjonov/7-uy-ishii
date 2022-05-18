const data = [
  { 
    src: 'https://picsum.photos/200/300?random=1',
    id: 1,
    first_name: "Sophronia",
    last_name: "Stoddart",
    email: "sstoddart0@howstuffworks.com",
    gender: "Female",
    ip_address: "80.215.124.45",
  },
  { 
    src: 'https://picsum.photos/200/300?random=2',
    id: 2,
    first_name: "Elie",
    last_name: "Ashenhurst",
    email: "eashenhurst1@ameblo.jp",
    gender: "Female",
    ip_address: "68.37.253.68",
  },
  { 
    src: 'https://picsum.photos/200/300?random=3',
    id: 3,
    first_name: "Elianore",
    last_name: "Eaddy",
    email: "eeaddy2@chronoengine.com",
    gender: "Female",
    ip_address: "67.148.137.105",
  },
  { 
    src: 'https://picsum.photos/200/300?random=4',
    id: 4,
    first_name: "Brittne",
    last_name: "Heditch",
    email: "bheditch3@businessweek.com",
    gender: "Female",
    ip_address: "100.224.120.91",
  },
  { 
    src: 'https://picsum.photos/200/300?random=5',
    id: 5,
    first_name: "Harman",
    last_name: "Mashal",
    email: "hmashal4@sakura.ne.jp",
    gender: "Male",
    ip_address: "135.116.148.60",
  },
  { 
    src: 'https://picsum.photos/200/300?random=6',
    id: 6,
    first_name: "Flore",
    last_name: "Zappel",
    email: "fzappel5@tripod.com",
    gender: "Female",
    ip_address: "78.191.118.28",
  },
  { 
    src: 'https://picsum.photos/200/300?random=7',
    id: 7,
    first_name: "Angelina",
    last_name: "Manneville",
    email: "amanneville6@lycos.com",
    gender: "Bigender",
    ip_address: "176.253.242.10",
  },
  { 
    src: 'https://picsum.photos/200/300?random=8',
    id: 8,
    first_name: "Merilyn",
    last_name: "Marusik",
    email: "mmarusik7@1und1.de",
    gender: "Female",
    ip_address: "221.137.214.47",
  },
  { 
    src: 'https://picsum.photos/200/300?random=9',
    id: 9,
    first_name: "Jeddy",
    last_name: "Brunn",
    email: "jbrunn8@umn.edu",
    gender: "Male",
    ip_address: "9.189.41.129",
  },
  { 
    src: 'https://picsum.photos/200/300?random=10',
    id: 10,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
  { 
    src: 'https://picsum.photos/200/300?random=11',
    id: 11,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
  { 
    src: 'https://picsum.photos/200/300?random=11',
    id: 11,
    first_name: "Mbape",
    last_name: "Teshaboyev",
    email: "tewaboyev9@wix.com",
    gender: "Male",
    ip_address: "188.48.251.168",
  },
];

const userImg = document.querySelectorAll(".user__img")
userImg[0].src = data[0].src
userImg[1].src = data[1].src
userImg[2].src = data[2].src
userImg[3].src = data[3].src
userImg[4].src = data[4].src
userImg[5].src = data[5].src
userImg[6].src = data[6].src
userImg[7].src = data[7].src
userImg[8].src = data[8].src
userImg[9].src = data[9].src
userImg[10].src = data[10].src
userImg[11].src = data[11].src

const userName = document.querySelectorAll(".user__fullname")
userName[0].textContent = data[0].first_name + ' ' + data[0].last_name
userName[1].textContent = data[1].first_name + ' ' + data[1].last_name
userName[2].textContent = data[2].first_name + ' ' + data[2].last_name
userName[3].textContent = data[3].first_name + ' ' + data[3].last_name
userName[4].textContent = data[4].first_name + ' ' + data[4].last_name
userName[5].textContent = data[5].first_name + ' ' + data[5].last_name
userName[6].textContent = data[6].first_name + ' ' + data[6].last_name
userName[7].textContent = data[7].first_name + ' ' + data[7].last_name
userName[8].textContent = data[8].first_name + ' ' + data[8].last_name
userName[9].textContent = data[9].first_name + ' ' + data[9].last_name
userName[10].textContent = data[10].first_name + ' ' + data[10].last_name


const userEmail = document.querySelectorAll(".user__email")
userEmail[0].textContent = data[0].email
userEmail[1].textContent = data[1].email
userEmail[2].textContent = data[2].email
userEmail[3].textContent = data[3].email
userEmail[4].textContent = data[4].email
userEmail[5].textContent = data[5].email
userEmail[6].textContent = data[6].email
userEmail[7].textContent = data[7].email
userEmail[8].textContent = data[8].email
userEmail[9].textContent = data[9].email
userEmail[10].textContent = data[10].email

const userGender = document.querySelectorAll(".user__gender")
userGender[0].textContent = data[0].gender
userGender[2].textContent = data[2].gender
userGender[3].textContent = data[3].gender
userGender[4].textContent = data[4].gender
userGender[5].textContent = data[5].gender
userGender[6].textContent = data[6].gender
userGender[7].textContent = data[7].gender
userGender[8].textContent = data[8].gender
userGender[9].textContent = data[9].gender
userGender[10].textContent = data[10].gender
userGender[11].textContent = data[11].gender

const userIpadres =document.querySelectorAll(".user__address")
userIpadres[0].textContent = data[0].ip_address
userIpadres[1].textContent = data[1].ip_address
userIpadres[2].textContent = data[2].ip_address
userIpadres[3].textContent = data[3].ip_address
userIpadres[4].textContent = data[4].ip_address
userIpadres[5].textContent = data[5].ip_address
userIpadres[6].textContent = data[6].ip_address
userIpadres[7].textContent = data[7].ip_address
userIpadres[8].textContent = data[8].ip_address
userIpadres[9].textContent = data[9].ip_address
userIpadres[10].textContent = data[10].ip_address
userIpadres[11].textContent = data[11].ip_address