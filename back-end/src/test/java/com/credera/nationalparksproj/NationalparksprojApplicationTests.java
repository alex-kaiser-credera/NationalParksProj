package com.credera.nationalparksproj;

import com.credera.nationalparksproj.dto.TextToVisitor;
import com.credera.nationalparksproj.dto.UnconnectedRequest;
import com.credera.nationalparksproj.dto.UpdateText;
import com.credera.nationalparksproj.dto.UserLogin;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.sql.Update;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import javax.mail.Message;
import javax.mail.Session;
import java.util.Arrays;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.core.AllOf.allOf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class NationalparksprojApplicationTests {

	@Autowired
	MockMvc mockMvc;

	@Test
	public void getPark() throws Exception{
		mockMvc.perform(get("/getPark/?id=5"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.name").value("Big Bend"));

	}

	@Test
	public void getInProgress() throws Exception{
		mockMvc.perform(get("/status/filter?filter=In Progress"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.[0].status").value("In Progress"));
	}

	@Test
	public void getCompleted() throws Exception{
		mockMvc.perform(get("/status/filter?filter=Completed"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.[0].status").value("Completed"));
	}

	@Test
	public void getAll() throws Exception{
		mockMvc.perform(get("/status/filter?filter=All"))
				.andExpect(status().isOk());
	}

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
		UserLogin userLogin = new UserLogin("AlexKaiser", "password123");
		ObjectMapper objectMapper = new ObjectMapper();
		mockMvc.perform(post("/password/")
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(userLogin)))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.successful").value("true"));
	}

	@Test
	public void checkWrongPassword() throws Exception{
		UserLogin userLogin = new UserLogin("AlexKaiser", "password");
		ObjectMapper objectMapper = new ObjectMapper();
		mockMvc.perform(post("/password/")
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(userLogin)))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.successful").value("false"));
	}

	@Test
	public void SendTextToVisitor() throws Exception{
		TextToVisitor textToVisitor = new TextToVisitor("lol@yahoo.com", "Hello");
		ObjectMapper objectMapper = new ObjectMapper();
		mockMvc.perform(post("/status/send")
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(textToVisitor)))
				.andExpect(status().isOk());

	}

	@Test
	public void checkUpdateNotes() throws Exception {
		UpdateText updateText = new UpdateText("This Stuff is Fun!");
		ObjectMapper objectMapper = new ObjectMapper();
		mockMvc.perform(put("/status/updateNotes/3")
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(updateText)))
				.andExpect(status().isOk());
	}

	@Test
	public void getSpecificRequest() throws Exception{
		mockMvc.perform(get("/status/view/3?status=All"))
				.andExpect(status().isOk());
	}

	@Test
	public void getSpecificRequestByID() throws Exception{
		mockMvc.perform(get("/status/3"))
				.andExpect(status().isOk());
	}

	@Test
	public void getAllParks() throws Exception{
		mockMvc.perform(get("/getAllParks/"))
				.andExpect(status().isOk());

	}

	@Test
	public void checkChangeStatus() throws Exception {
		mockMvc.perform(put("/status/updateStatus/3?status=Completed"))
				.andExpect(status().isOk());
	}
}
