package com.credera.nationalparksproj;

import com.credera.nationalparksproj.dto.UnconnectedRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.core.AllOf.allOf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class NationalparksprojApplicationTests {

	@Autowired
	MockMvc mockMvc;

	@Test
	public void getPark() throws Exception{
		ObjectMapper objectMapper = new ObjectMapper();
		mockMvc.perform(get("/getPark/?id=5"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.name").value("Big Bend"));

	}

	@Test
	public void getInProgress() throws Exception{
		ObjectMapper objectMapper = new ObjectMapper();
		mockMvc.perform(get("/status/filter?filter=In Progress"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.[0].status").value("In Progress"));
	}

	@Test
	public void getCompleted() throws Exception{
		ObjectMapper objectMapper = new ObjectMapper();
		mockMvc.perform(get("/status/filter?filter=Completed"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.[0].status").value("Completed"));
	}

// 	@Test
// 	public void getAll() throws Exception{
// 		ObjectMapper objectMapper = new ObjectMapper();
// 		mockMvc.perform(get("/status/filter?filter=All"))
// 				.andExpect(status().isOk())
// 				.andExpect(jsonPath("$.[0].status").value("Completed"));

// 		mockMvc.perform(get("/status/filter?filter=Completed"))
// 				.andExpect(status().isOk())
// 				.andExpect(jsonPath("$.[1].status").value("In Progress"));
// 	}

	@Test
	public void sendRequest() throws Exception{
		UnconnectedRequest unconnectedRequest = new UnconnectedRequest("In Progress", "01/01/10", "01/02/10", 43, "Bathrooms Dirty", "Bathrooms Bad", "lol@yahoo.com");
		ObjectMapper objectMapper = new ObjectMapper();
		mockMvc.perform(post("/status/visitor")
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(unconnectedRequest)))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.parkLocation.name").value("Mesa Verde"));
	}

	@Test
	public void checkPassword() throws Exception{

		mockMvc.perform(post("/password/?username=AlexKaiser&password=password123"))
				.andExpect(status().isOk())
				.andExpect(content().string("true"));
	}

	@Test
	public void checkWrongPassword() throws Exception{

		mockMvc.perform(post("/password/?username=AlexKaiser&password=password1234"))
				.andExpect(status().isOk())
				.andExpect(content().string("false"));
	}
}
