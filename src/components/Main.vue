<script setup>
import { ref, reactive } from 'vue';
import Quizez from '../Data';
let marks = reactive(0);
let showQuestion = reactive(2)

function calculateMarks(){
  marks = 0;
  for(let singleQuestion of Quizez){
    if(singleQuestion.Answer === singleQuestion.checked){
      marks += 1;
    }
  }
  document.querySelector('.mark').innerText = marks;
}
</script>
<template>
  <div class="container mx-auto">
    <div class="p-4 rounded my-2 bg-slate-100">
      <h2 class="text-2xl text-center">Basic Vue JS Quiz app.</h2>
      <div class="p-3 rounded my-2 bg-slate-200" v-for="(question, index) in Quizez" :key="index">
        <h2 class="text-xl">{{ question.question }}</h2>
        <div v-for="(option,ind) in question.answers" :key="ind">
          <input @click="Quizez[index].checked = option" class="mr-1" type="radio" :name="index" :id="option">
          <label :for="option">{{ option }}</label><br>
        </div>
      </div>
    </div>
    <div class="my-2">
      <button @click="calculateMarks()" class="px-4 py-2 bg-green-100 text-green-600 fixed top-2 right-2 rounded">Get Marks <span class="mark"></span> </button>
    </div>
  </div>
</template>
<style></style>
