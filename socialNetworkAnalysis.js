var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function nameAccess (id, data) {
  for (i in data) {
    if (id === i){
      return data[i].name;
    }
  }
}

function findFollowers(id){
follower = [];
  for (var i  = 0; i < id.follows.length; i++) {
    follower.push(nameAccess(id.follows[i], data));
  }
  return follower;
 // console.log(follower);
}

//findFollowers(data.f04);

function getAge(data) {
  var ageList = {};
  for (var i in data){
    ageList[data[i].name] = data[i].age;
  }
  return ageList;
}

var ageInfo = getAge(data);

function followedBy(id, data) {
  followed = [];
  for (i in data) {
    if (id === i) { continue; }
    else {
      if (data[i].follows.includes(id)) {
        followed.push(data[i].name);
      }
    }
  }
  return followed;
 // console.log(followed);
}

function totalUserFollowers(data) {
  var combinedFollowers = {};
  for (var i in data) {
      var followers = {};
      followers.following = findFollowers(data[i]);
      followers["is followed By"] = followedBy(i, data);
      combinedFollowers[data[i].name] = followers;
  }
  return combinedFollowers;
}

var bigData = totalUserFollowers(data);

function followingTheMost(bigInfo){
  var thePerson = "";
  var count = 0
  for (var i in bigInfo){

    if (bigInfo[i].following.length > count){
      count = bigInfo[i].following.length;
      thePerson = i;
    }
  }
  return thePerson;
}

function mostFollowers(bigInfo) {
  var popularPerson;
  var popularLIst = [];
  var count = 0;
  for (var i in bigInfo){
    if (bigInfo[i]["is followed By"].length > count){
      count = bigInfo[i]["is followed By"].length;
      popularPerson = i;
    }
  }
  for (var i in bigInfo){
    if (bigInfo[i]["is followed By"].length === count){
      popularLIst.push(i);
    }
  }
  return popularLIst;
}
var mostPopular = mostFollowers(bigData);

function mostFollowedOver30 (peopleList, bigInfo, ageData) {
  var refPerson = peopleList[0];
  var ans = {};
  var num = bigInfo[peopleList[0]]["is followed By"].length;
 // console.log(peopleList);
  for (var i = 0; i < peopleList.length; i++) {
    ans[peopleList[i]] = 0;
    for (var j = 0; j < (bigInfo[peopleList[i]]["is followed By"]).length; j++) {
      var middlePerson = (bigInfo[peopleList[i]]["is followed By"])[j];
      console.log(middlePerson);
      if (ageData[middlePerson] >= 30) {
        ans[peopleList[i]] += 1;
      }
    }
  }

  var ansList = [];
  var count = 0;
  for (var i in ans) {
    if (ans[i] > count) {
      count = ans[i]
    }
  }

  for (var i in ans) {
    if (ans[i] == count){
      ansList.push(i);
    }
  }

  // console.log(ans);
  // console.log(ansList);
  return ansList;
}


mostFollowedOver30(mostPopular, bigData, ageInfo);

